// add active class
let list = document.querySelectorAll(".list");
for(let i = 0; i < list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = "list";
        };
        list[i].className = "list active";
    };
};



///////////// charts.js ////////////////////

// income chart
const ctxOne = document.getElementById('myChartOne');

  new Chart(ctxOne, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      datasets: [{
        label: '%',
        data: [20, 30, 100, 60, 50, 90, 40, 30, 10],
        backgroundColor:"transparent",
        borderColor: "#f5f0b2",
        tension: "0.4", // dalgaların keskin görüntüsünü yuvarladık
        borderWidth: 1 // panelde ki oran çizgimizin kalınlığı
      }]
    },
    options: {
      responsive: true,
      plugins:{
        legend:{
            display: false, // oran butonunu kaldırdık tablonun başındaki
        }
      }
    }
  });


//   outcome chart
const ctxTwo = document.getElementById('myChartTwo');
new Chart(ctxTwo, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [{
        label: '%',
        data: [50, 70, 100, 80, 120, 90],
        backgroundColor:"transparent",
        borderColor: "#f5f0b2",
        tension: "0.4", // dalgaların keskin görüntüsünü yuvarladık
        borderWidth: 1 // panelde ki oran çizgimizin kalınlığı
      }]
    },
    options: {
      responsive: true,
      plugins:{
        legend:{
            display: false, // oran butonunu kaldırdık tablonun başındaki
        }
      }
    }
  });

// Haftalık chart
const ctxThree = document.getElementById('myChartThree');

var mychart = new Chart(ctxThree, {
  type: 'bar',
  data: {
    labels: ['Pazart.', 'Salı', 'Çarş.', 'Perş.', 'Cuma', 'Cumrt.', 'Pzr'],
    datasets: [{
      label: 'Bu Hafta',
      data: [48, 45, 25, 35, 65, 65, 70],
      backgroundColor: "#f5f0b2",
      borderRadius: 50,
      barPercentage: 0.6,
      categoryPercentage: 0.5,
    },
    {
      label: 'Geçen Hafta',
      data: [73, 25, 20, 43, 60, 85, 47],
      backgroundColor: "#FADB3F",
      borderRadius: 50,
      barPercentage: 0.6,
      categoryPercentage: 0.5,
    }]
  },
  options: {
    layout: {
      padding: {
        top: 30
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  }
});

function toggleData(value) {
  const visibilityData = mychart.isDatasetVisible(value);

  // Eğer dataset görünürse gizle, gizliyse göster
  if (visibilityData) {
    mychart.hide(value);
  } else {
    mychart.show(value);
  }

  // Dataset'in görünürlük durumunu konsolda göster
  console.log(mychart.isDatasetVisible(value));
}

/* Açıklamalar:
 toggleData(value) fonksiyonu, belirli bir datasetin görünürlüğünü değiştirir.
 isDatasetVisible(value) ile datasetin görünür olup olmadığını kontrol edersiniz.
 Dataset görünürse mychart.hide(value) ile gizlenir, gizliyse mychart.show(value) ile gösterilir.
 console.log(mychart.isDatasetVisible(value)) ifadesiyle, datasetin o anki görünürlük durumu konsola yazdırılır.
*/


// aktiviteler
const ctxFour = document.getElementById('myChartFour');

  new Chart(ctxFour, {
    type: 'doughnut',
    data: {
      labels: ['Aylık', 'Market', 'Abonelikler', 'Seyehat', 'Diğer'],
      datasets: [{
        label: '%',
        data: [26, 34, 10, 15, 17],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
      }]
    },
    options: {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins:{
        legend:{
          display: false,
        }
      }
    }
  });


  ////////// swiper.js /////////////
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });

  // switch theme, Gündüz modu:
  let themeSwitcher = document.querySelector(".switch-theme").addEventListener("click", ()=>{
    document.body.classList.toggle("lightThemeColors")

    themeSwitcher.querySelector("span:nth-child(1)").classList.toggle("active");
    themeSwitcher.querySelector("span:nth-child(2)").classList.toggle("active");
  });


  