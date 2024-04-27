import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";
import avatar1 from "../../../assets/images/avatar1.png";
import more from "../../../assets/images/more.png";
import video from "../../../assets/images/video.png";
import edit from "../../../assets/images/edit.png";


const Userinfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || avatar1} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src={more} alt="" />
        <img src={video} alt="" />
        <img src={edit} alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
