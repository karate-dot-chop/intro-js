setTimeout(function() {
  console.log("First task complete!");
  setTimeout(function() {
    console.log("Second task complete!");
    setTimeout(function() {
      console.log("Third task complete!");
    }, 2000);
  }, 2000);
}, 2000);