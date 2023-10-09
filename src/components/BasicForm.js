import React from "react";
const BasicForm = () => {

  const onHandleMutiCheck = (e) => {
    console.log(e.target.value)
  }
  return (
  <>
    <p>基礎表單介紹</p>

    <div>
        <label htmlFor="username" className="form-label">使用者名稱</label>
      <input id="username" type="text" className="form-control" name="username"/>
    </div>
      <div>
        <label htmlFor="password">密碼</label>
        <input id="password" type="password" />
      </div>
      <div>
        <label>電話</label>
        <input type="text" />
      </div>
      <div>
        <label>縣市</label>
        <input type="text" />
      </div>
      <div>
        <label>鄉鎮市區</label>
        <select id="district">
        <option>Choose...</option>
        <option>...</option>
        </select>
      </div>
      <div>
        <label>地址</label>
        <input type="text" />
      </div>
      <div>
        <label>素食者</label>
        <input type="text" />
      </div>
      <div>
        <input type="checkbox" />
        <label id="checkbox01" name="like" value="炒麵" onChange={onHandleMutiCheck}>炒麵</label>
        <input type="checkbox" />
        <label id="checkbox01" name="like" value="炒飯" onChange={onHandleMutiCheck}>炒飯</label>
        <input type="checkbox" />
        <label id="checkbox01" name="like" value="義大利麵" onChange={onHandleMutiCheck}>義大利麵</label>
      </div>
  </>
  )
}

export default BasicForm;