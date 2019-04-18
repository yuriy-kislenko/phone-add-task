var i = 0;
var dataArray = [];

document.addEventListener("click", function(e) {
    var _this = e.target;

    if(_this.matches('.btn')) {

        e.preventDefault();

        var diller = document.querySelector('.diller');
        var model = document.querySelector('.model');
        var url = document.querySelector('.url');
        var buttery = document.querySelector('.buttery');
        var desc = document.querySelector('.desc');
        
        dataArray.push({
            diller:diller.value,
            model:model.value,
            url:url.value,
            buttery:buttery.value,
            desc:desc.textContent
        });

        createItemList(diller.value, url.value, desc.value, i);

        diller.value = '';
        model.value = '';
        url.value = '';
        buttery.value = '';
        desc.textContent = '';

        console.log(dataArray);
        
        i++;
        
    }
    
    if(_this.matches('.details')) {
        
        var list = document.querySelector('.item__view');

        if(list.hasChildNodes()) {

            list.removeChild(list.childNodes[0]);

            var id = _this.getAttribute('data-id');

            var li = document.createElement('li');
            var h3 = document.createElement('h3');
            var img = document.createElement('img');
            var butteryText = document.createElement('p');
            var modelText = document.createElement('p');
            var descText = document.createElement('p');
            var textBlock = document.createElement('div');
            var contentBlock = document.createElement('div');
            contentBlock.classList.add('item-block');
            descText.classList.add('desc__text')

            h3.textContent = dataArray[id].diller;
            img.src = dataArray[id].url;
            butteryText.textContent = dataArray[id].buttery;
            modelText.textContent = dataArray[id].model;
            descText.textContent = dataArray[id].desc;

            textBlock.append(h3);
            textBlock.append(modelText);
            textBlock.append(butteryText);

            contentBlock.append(img);
            contentBlock.append(textBlock);
            contentBlock.append(descText);
            
            // li.append(img);
            // li.append(textBlock);
            // li.append(descText);

            li.append(contentBlock);

            document.querySelector('.item__view').append(li);

        } 

    }

});

function createItemList(diller, url, desc, i) {

    var li = document.createElement('li');
    var h3 = document.createElement('h3');
    var img = document.createElement('img');
    var a = document.createElement('a');

    li.classList.add('item');
    a.classList.add('details');
    a.textContent = 'details';
    h3.textContent = diller;
    img.src = url;
    img.style.width = '100px';

    a.setAttribute('data-id', i);

    li.append(img);
    li.append(h3);
    li.append(a);

    document.querySelector('.item__list').append(li);

}