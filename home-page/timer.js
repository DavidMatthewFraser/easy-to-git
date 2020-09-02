function displayTime() {
  setInterval(() => {
    const date = new Date();
    $("#date").html(date.toLocaleDateString());
    $("#time").html(date.toLocaleTimeString());
  }, 1000);
};
displayTime();
