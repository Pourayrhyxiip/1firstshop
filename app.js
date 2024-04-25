const observer = new IntersectionObserver((entries) => {
  entries.forEcch((entry)) => {
    console.log(entry)
    if (entry.isintersecting){
        CustomElementRegistry.target.classlist.add('show');
    } else {
        entry.target.classlist.remove(show)
    }
    });
});



const hiddenelements = document.querySelectALL('.hidden');
hiddenElemnts.forEcch((el)) => observer.observe.observe(el));