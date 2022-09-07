//get by id of feild value
const getInputValueById = (id) => {
  const inputFeild = document.getElementById(id);
  const inputFeildValue = inputFeild.value;
  inputFeild.value = "";
  return inputFeildValue;
};

//send name
const sendeName = () => {
  const getName = getInputValueById("name");
  if (getName !== "") {
    localStorage.setItem("name", getName);
    render();
  } else {
    alert("Please enter your name");
  }
};

//remove name
const removeName = () => {
  const confirmCheck = confirm("Are you want to delete this");
  if (confirmCheck) {
    localStorage.removeItem("name");
    alert("Your name is deleted");
  } else {
    alert("Your name is save now");
  }
};

//send email
const sendeEmail = () => {
  const getEmail = getInputValueById("email");
  if (getEmail !== "") {
    localStorage.setItem("email", getEmail);
    render();
  } else {
    alert("Please enter your email");
  }
};

//remove email
const removeEmail = () => {
  const confirmCheck = confirm("Are you want to delete this");
  if (confirmCheck) {
    localStorage.removeItem("email");
    alert("Your email is deleted");
  } else {
    alert("Your email is save now");
  }
};

//send message
const sendMessage = () => {
  const getMessage = getInputValueById("message");
  if (getMessage !== "") {
    localStorage.setItem("message", getMessage);
    render();
  } else {
    alert("Please enter your message");
  }
};

//remove message
const removeMessage = () => {
  const confirmCheck = confirm("Are you want to delete this");
  if (confirmCheck) {
    localStorage.removeItem("message");
    alert("Your message is deleted");
  } else {
    alert("Your message is save now");
  }
};

//reset form value

const resetFormValue = () => {
  localStorage.clear();
};

//get message from storage

const getStorageMessage = () => {
  const messageAll = localStorage.getItem("message all");
  let storeMessage = {};
  if (messageAll) {
    storeMessage = JSON.parse(messageAll);
  }
  return storeMessage;
};

//set message to storage

const setMessageToStorage = (name, email, message) => {
  const messageGet = getStorageMessage();

  const itemList = {
    Name: name,
    Email: email,
    Message: message,
  };

  messageGet[itemList.Name] = itemList;

  const stringifiedText = JSON.stringify(messageGet);
  localStorage.setItem("message all", stringifiedText);

  //display message from local storage
};
const displayStoredMessage = () => {
  let number = 0;
  const messageGet = getStorageMessage();
  const rowText = document.getElementById("rowText");
  rowText.innerHTML = "";
  for (let item in messageGet) {
    number++;
    const createRow = document.createElement("tr");
    const allmsg = messageGet[item];
    const removeName = item;
    // console.log(allmsg.Name , allmsg.Email , allmsg.Message);
    createRow.innerHTML = `
<td> ${number} </td>
<td> ${allmsg.Name} </td>
<td> ${allmsg.Email} </td>
<td> ${allmsg.Message} </td>
<td>   <i class="fas fa-trash fa-2x text-danger" onclick="removeItem('${removeName}')"></i>  </td>
`;
    rowText.appendChild(createRow);
  }
};

displayStoredMessage();

//remove each item one by one from local storage
const removeItem = (removeName) => {
  const localSt = localStorage.getItem("message all");
  const parseItem = JSON.parse(localSt);
  delete parseItem[removeName];
  localStorage.setItem("message all", JSON.stringify(parseItem));

  displayStoredMessage();
};

//send all message at a time
const sendAllInfo = () => {
  const getName = getInputValueById("name");
  const getEmail = getInputValueById("email");
  const getMessage = getInputValueById("message");
  setMessageToStorage(getName, getEmail, getMessage);
  displayStoredMessage();
};
