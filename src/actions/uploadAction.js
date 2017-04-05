export const UPLOAD_IMAGE = "UPLOAD_IMAGE";

export function uploadImage(image, ext){
  return {
    type: UPLOAD_IMAGE,
    image,
    ext
  }
}
