import Modal from "../../components/modal/modal";
import Avatar from "../../components/avatar/avatar";
import UserImage from "../../assets/img/userImage.jpg";
import Button from "../../components/button/button";
const InputForm = (props) => {
  let name = sessionStorage.getItem("login");
  const { open, onClickModal, post, onChangeTextPost, onSubmit, title } = props;
  return (
    <div>
      <Modal
        content={
          <form onSubmit={onSubmit}>
            <div className="post-parent">
              <Avatar imageUrl={UserImage} size="lg" />
              <div className="post-user">
                <p>{name}</p>
              </div>
            </div>
            <div className="input-post">
              <textarea
                value={post.post}
                onChange={onChangeTextPost}
                rows="6"
                placeholder="Whats on your mind?"
                className="post-input"
              />
            </div>
            <div className="flex-end">
              <Button type="submit" label={"POST"} />
            </div>
          </form>
        }
        title={title}
        open={open}
        onClickModal={onClickModal}
      ></Modal>
    </div>
  );
};

export default InputForm;
