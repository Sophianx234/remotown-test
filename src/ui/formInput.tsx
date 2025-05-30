type formInputProps = {
  type:string;
  
}
function formInput() {
  return (
    <label htmlFor="username">

    <input type="text" placeholder='Username' name="" id="username" />
        </label>
  )
}

export default formInput
