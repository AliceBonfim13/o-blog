import { DrizzlePostRepository } from "./drizzie-post-repository";
import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new DrizzlePostRepository();
