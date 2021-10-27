
export default function Settings() {
  return (
    <div className="container">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <div className="row">
              <div className="col-6">
                <span className="d-flex justify-content-start">
                    <span className="btn btn-success shadow-none">Akkauntni yangilash</span>
                </span>
              </div>
              <div className="col-6">
                <span className="d-flex justify-content-end">
                    <span className="btn btn-danger shadow-none">Akkauntni o'chirish</span>
                </span>
              </div>
          </div>
        </div>
        <form className="settingsForm p-2">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              style={{
                  width:"50px",
                  height:"50px",
                  borderRadius:"50%",
              }}
            />
            <label htmlFor="fileInput">
              <i className="text-danger far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input className="form-control" type="text" placeholder="Ism" name="name" />
          <label>Email</label>
          <input className="form-control" type="email" placeholder="email@gmail.com" name="email" />
          <label>Password</label>
          <input className="form-control" type="password" placeholder="parol" name="password" />
          <button className="btn btn-outline-dark mt-3" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}