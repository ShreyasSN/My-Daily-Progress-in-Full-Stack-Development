document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('input[name="tabs-education"]');
    const contents = document.querySelectorAll('.tab-content');

    function showContent(selectedId) {
        contents.forEach(content => {
            // console.log(content.id);
            console.log(`content-${selectedId}`);
            if (content.id === `content-${selectedId}`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('change', () => showContent(tab.id));
    });

    // Initial display setup for checked tab
    showContent(document.querySelector('input[name="tabs-education"]:checked').id);
});


