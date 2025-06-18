export  function showLoader(event, target) {
    event.preventDefault(); // stop immediate jump
    document.getElementById("loader").classList.add("show");
    setTimeout(() => {
      window.location.href = target;
    }, 500); // adjust delay as needed
  }
