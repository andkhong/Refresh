export const DOWNLOAD_IMG = "DOWNLOAD_IMG";

export function downloadImage(config){
  return {
    type: DOWNLOAD_IMG,
    config
  }
}
