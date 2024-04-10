const cloud_name = "doy857iqw";
const upload_preset = "iamuser1234";

const uploadImg = () => {
    const { files } = document.querySelector(".app_uploadInput");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", upload_preset);
    const options = {
     method: "POST",
     body: formData,
    };
    return fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options
   )
    .then((res) => res.json())
    .then((res) =>  res.secure_url)
    .catch((err) => console.log(err));
};

export default uploadImg;