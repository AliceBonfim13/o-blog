import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findPostIdAdmin = cache(async (id: string) => {
  return postRepository.findById(id);
});

export const findAllPostIdAdmin = cache(async () => {
  return postRepository.findAll();
});
