export const UPLOAD_IMAGE = "UPLOAD_IMAGE";

export function uploadImage(image, mimetype){
  return {
    type: UPLOAD_IMAGE,
    image,
    mimetype
  }
}
