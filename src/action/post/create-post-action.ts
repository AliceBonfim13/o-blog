"use server";

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { postRepository } from "@/repositories/post";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { makeSlugFromText } from "@/utils/make-slug-from-text";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuidV4 } from "uuid";

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: string;
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  //TODO: verificar se o usuario estar logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["Dados do formulário inválidos"],
    };
  }

  const formToObject = Object.fromEntries(formData.entries());
  const zodParseObj = PostCreateSchema.safeParse(formToObject);

  if (!zodParseObj.success) {
    const errors = getZodErrorMessages(zodParseObj.error.format());
    return {
      formState: makePartialPublicPost(formToObject),
      errors,
    };
  }

  const validPostData = zodParseObj.data;
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: uuidV4(),
    slug: makeSlugFromText(validPostData.title),
  };

  try {
    await postRepository.create(newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: newPost,
        errors: ["Erro desconhecido"],
      };
    }
    return {
      formState: newPost,
      errors: ["Erro desconhecido"],
    };
  }

  revalidateTag("posts", "posts");
  redirect(`/admin/post/${newPost.id}?created=1`);
}
