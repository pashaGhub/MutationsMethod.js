let guestArr = [];

document.getElementById('addStart').addEventListener("click", function () {
  guestArr.unshift(document.getElementById('guestName').value);
  document.getElementById('guestName').value = null;
  printGuestsList()
});

document.getElementById('addEnd').addEventListener("click", function () {
  guestArr.push(document.getElementById('guestName').value);
  document.getElementById('guestName').value = null;
  printGuestsList()
});

document.getElementById('removeFirst').addEventListener("click", function () {
  guestArr.shift();
  printGuestsList()
});

document.getElementById('removeLast').addEventListener("click", function () {
  guestArr.pop();
  printGuestsList()
});

document.getElementById('reverseList').addEventListener("click", function () {
  guestArr = guestArr.reverse();
  printGuestsList()
});


function printGuestsList() {
  // document.getElementById('arrPrint').innerHTML = null;
  guestArr.forEach(function(invitedGuest) {
    let guestItem =  document.createElement("li");
    guestItem.classList.add("list-group-item");
    guestItem.textContent = invitedGuest;
    document.getElementById("arrPrint").appendChild(guestItem);

  });
};
