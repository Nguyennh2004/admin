document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader(); 
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            document.getElementById('preview').style.backgroundImage = `url(${e.target.result})`;
            document.getElementById('preview').textContent = ""; 
        };
    }
  }); 