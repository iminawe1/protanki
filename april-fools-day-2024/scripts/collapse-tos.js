

document.addEventListener('DOMContentLoaded', function () {
    const toc = document.getElementById('toc');
    const hideBtn = document.getElementById('hideBtn');

    hideBtn.addEventListener('click', function() {
        if (toc.style.display !== 'none') {
            toc.style.display = 'none';
            hideBtn.textContent = 'show'
        } else {
            toc.style.display = 'block';
            hideBtn.textContent = 'hide';
        }
    })
})