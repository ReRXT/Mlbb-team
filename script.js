const artBase = document.querySelector("#art-base");
const role = document.querySelector("#role");
const stat = document.querySelector("#stat");
const team = document.querySelector("#team");
const feedback = document.querySelector("#feedback");
const newRole = document.createElement("art-role");
const newStat = document.createElement("new-stat");
const base = document.querySelector("#base");
const newBase = document.createElement("new-base");
const newTeam = document.createElement("new-team");
const newFeedback = document.createElement("new-feedback");
const FeedbackSaves = document.querySelector("#feedbacksaves");
const newFeedbackSaves = document.createElement("new-feedbacksaves")
base.addEventListener("click", () => {
    artBase.innerHTML = '';
    newRole.innerHTML = '';
    newStat.innerHTML = '';
    newBase.innerHTML = `
        <div>
            <h1>Тут основная страница</h1>
            <p>
                Наша команда веселая, иногда играем по фану, а бывает и на рейтинг.
                Однако у нас не особо получается выигрывать в последнее время.
                Мы стараемся победить, но противники оказываются сильнее.
                Больше я ничего не придумал что сюда вписать.
            </p>
            <div>
                <img src="https://th.bing.com/th/id/R.3ea0347e6da9c9da415bb5ba61985f04?rik=NShTc%2bl68tA7lA&pid=ImgRaw&r=0" class="image">
            </div>
        </div>
    `;
    artBase.appendChild(newBase)
});
role.addEventListener("click", () => {
    artBase.innerHTML = '';
    newRole.innerHTML = `
        <div>
            <img src="images/s1.JPG" class="ren">
            <p class="ar1">Сейчас начал играть в основном на миду, на персонажах</p>
            <img src="https://tse4.mm.bing.net/th/id/OIP.tv-mKYZdIH4KFSwiW_lhOwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" class="nov">
            <img src="https://tse3.mm.bing.net/th/id/OIP.-1BbsmPYO3YilMazYNXCuQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" class="chan">
        </div>
        <div>
            <img src="images/s2.jpg" class="sann" style="width: 100px">
            <p class="ar2">Играет в лесу, на персонажах</p>
            <img src="https://tse2.mm.bing.net/th/id/OIP.pLSkPdNs9PmwMBpRdft0zgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" class="lans" style="width: 100px">
            <img src="https://i.ytimg.com/vi/sPk_qAascvs/maxresdefault.jpg" class="baks" style="width: 100px">
        </div>
        <div>
            <img src="images/s3.jpg" class="stas" style="width: 100px">
            <p class="ar3">Играет в основном на экспе(линия опыта), на персонажах</p>
            <img src="https://gumlet.assettype.com/afkgaming/2023-10/7befe056-3193-4460-9665-630ec73b6993/MLBB_Fredrinn.jpg?compress=true&dpr=1&w=1200" class="fred" style="width: 100px">
            <img src="https://rare-gallery.com/uploads/posts/345783-Yu-Zhong-Mobile-Legends-ML-MLBB-Video-Game.jpg" class="chong" style="width: 100px">
        </div>
        <div>
            <img src="images/s4.jpg" class="sofa" style="width: 100px">
            <p class="ar4">Играет в основном в роуме, на персонажах</p>
            <img src="https://i.pinimg.com/originals/b4/18/0c/b4180c866493f4e45454dcaeacb783a8.jpg" class="flor" style="width: 100px">
            <img src="https://tse3.mm.bing.net/th/id/OIP.dx7jOGDsKNsmD2VGK-4vlgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" class="raf" style="width: 100px">
        </div>
        <div>
            <img src="images/s5.jpg" class="ega" style="width: 100px">
            <p class="ar5">Играет в основном но голде(линия золота), на персонажах</p>
            <img src="https://th.bing.com/th/id/R.d7fce725a1c8d1035c13e2b8357f5ed4?rik=IruqBLa7jRH7tw&pid=ImgRaw&r=0" class="han" style="width: 100px">
            <img src="https://tse1.mm.bing.net/th/id/OIP.zof-gPophzd89BbVTZ85BQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" class="les" style="width: 100px">
        </div>
    `
    artBase.appendChild(newRole);
});
stat.addEventListener("click", () => {
    artBase.innerHTML = '';
    newRole.innerHTML = '';
    newStat.innerHTML = `
        <div>
            <img src="images/s1.JPG" style="width: 100px" class="ren1">
            <img src="https://tse4.mm.bing.net/th/id/OIP.tv-mKYZdIH4KFSwiW_lhOwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" class="nov1" style="width: 100px">
            <p class="art1">38 матчей, 39.5% ВР</p>
            <img src="https://tse3.mm.bing.net/th/id/OIP.-1BbsmPYO3YilMazYNXCuQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" class="chan1" style="width: 100px">
            <p class="art2">34 матчей 55.9% ВР</p>
        </div>
        <div>
            <img src="images/s2.jpg" class="sann2" style="width: 100px">
            <img src="https://tse2.mm.bing.net/th/id/OIP.pLSkPdNs9PmwMBpRdft0zgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" class="lans1" style="width: 100px">
            <p class="art3">15 матчей, 40% ВР</p>
            <img src="https://i.ytimg.com/vi/sPk_qAascvs/maxresdefault.jpg" class="baks1" style="width: 100px">
            <p class="art4">54 матча, 53.7% ВР</p>
        </div>
        <div>
            <img src="images/s3.jpg" class="stat1" style="width: 100px">
            <img src="https://gumlet.assettype.com/afkgaming/2023-10/7befe056-3193-4460-9665-630ec73b6993/MLBB_Fredrinn.jpg?compress=true&dpr=1&w=1200" class="fred1" style="width: 100px">
            <p class="art5">25 матчей, 40% ВР</p>
            <img src="https://rare-gallery.com/uploads/posts/345783-Yu-Zhong-Mobile-Legends-ML-MLBB-Video-Game.jpg" class="chong1" style="width: 100px">
            <p class="art6">142 матча, 55.6% ВР</p>
        </div>
        <div>
            <img src="images/s4.jpg" class="sofa1" style="width: 100px">
            <img src="https://i.pinimg.com/originals/b4/18/0c/b4180c866493f4e45454dcaeacb783a8.jpg" class="flor1" style="width: 100px">
            <p class="art7">162 матча, 50.6% ВР Топ 1 по Бендерам
            </p>
            <img src="https://tse3.mm.bing.net/th/id/OIP.dx7jOGDsKNsmD2VGK-4vlgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" class="raf1" style="width: 100px">
            <p class="art8">13 матчей, 30.8% ВР</p>
        </div>
        <div>
            <img src="images/s5.jpg" class="ega" style="width: 100px">
            <img src="https://th.bing.com/th/id/R.d7fce725a1c8d1035c13e2b8357f5ed4?rik=IruqBLa7jRH7tw&pid=ImgRaw&r=0" class="han1" style="width: 100px">
            <p class="art9">41 матч, 43.9% ВР</p>
            <img src="https://tse1.mm.bing.net/th/id/OIP.zof-gPophzd89BbVTZ85BQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" class="les1" style="width: 100px">
            <p class="art10">28 матчей, 46.4% ВР</p>
        </div>
    `
    artBase.appendChild(newStat);
});
team.addEventListener("click", () => {
    newBase.innerHTML = '';
    artBase.innerHTML = '';
    newRole.INNERhtml = '';
    newStat.innerHTML = '';
    newTeam.innerHTML = `
        <div>
            <img src="images/s1.JPG" style="width: 100px">
            <h1 class="name1">Ренат</h1>
            <p class="ab1">Основа нашей команды. Многократный MVP на роли леса. Лучший игрок команды</p>
        </div>
        <div>
            <img src="images/s2.jpg" style="width: 100px">
            <h1 class="name2">Саня</h1>
            <p class="ab2">Хороший игрок. Чиловый парень. "Натурал"</p>
        </div>
        <div>
            <img src="images/s3.jpg" style="width: 100px">
            <h1 class="name3">Стас(автор сайта)</h1>
            <p class="ab3">Играю неплохо, но очень давно. Учусь создавать сайты</p>
        </div>
        <div>
            <img src="images/s4.jpg" style="width: 100px">
            <h1 class="name4">Софа</h1>
            <p class="ab4">Главный хилер команды. Классная подруга. Девушка Рената.</p>
        </div>
        <div>
            <img src="images/s5.jpg" style="width: 100px">
            <h1 class="name5">Егор</h1>
            <p class="ab5">Относительно новичок. Неплохо играет. Угарный тип</p>
        </div>
    `
    artBase.appendChild(newTeam)
});
feedback.addEventListener("click", () => {
    newBase.innerHTML = '';
    newTeam.innerHTML = '';
    newRole.innerHTML = '';
    newStat.innerHTML = '';
    artBase.innerHTML = '';
    newFeedback.innerHTML = `
        <div>
            <h1>В разработке</h1>
        </div>
    `;
    artBase.appendChild(newFeedback)
});
FeedbackSaves.addEventListener("click", () => {
    newBase.innerHTML = '';
    newTeam.innerHTML = '';
    newRole.innerHTML = '';
    newStat.innerHTML = '';
    artBase.innerHTML = '';
    newFeedback.innerHTML = '';
    newFeedbackSaves.innerHTML = `
        <div>
            <h1>Пока что не работает</h1>
        </div>
    `;
    artBase.appendChild(newFeedbackSaves)
})