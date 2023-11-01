const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
  secure: true,
});

// const cloudinaryUploadImg = async (fileToUpload) => {
//   try {
//     const data = await cloudinary.uploader.upload(fileToUpload, {
//       resource_type: "auto",
//     });
//     // return {
//     //   url: data?.secure_url,
//     // };
//     return data;
//   } catch (error) {
//     return error;
//   }
// };
// const opts ={
//   overwrite:true,
//   invalidate: true,
//   resource_type: "auto",

// }

const cloudinaryUploadImg =async(uploadImg)=> {
  try{
   const response=await cloudinary.uploader.upload(uploadImg);
   return response;
  }catch(error){
    return error;
  }
}

// const cloudinaryUploadImg=(image)=>{
//   return new Promise((resolve,reject)=>{
//     cloudinary.uploader.upload(image,opts,(error,result)=>{
//       if(result && result.secure_url){
//         console.log(result.secure_url);
//         return resolve(result.secure_url);
//       }
//       console.log(error.message);
//       return reject({message:error.message});
//     });
//   });
// };



module.exports = cloudinaryUploadImg;
