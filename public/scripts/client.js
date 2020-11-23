const dataSetter = () =>{

   let ControlZaslonka, СontrolOpenZaslonka; // переменные для заслонки

    if (document.getElementById('r1').checked) {
      ControlZaslonka = document.getElementById('r1').value;
    }

    if (document.getElementById('r2').checked) {
      ControlZaslonka = document.getElementById('r2').value;
    }

    if (document.getElementById('r3').checked) {
      СontrolOpenZaslonka = document.getElementById('r3').value;
    }

    if (document.getElementById('r4').checked) {
      СontrolOpenZaslonka = document.getElementById('r4').value;
    }

    console.log("Заслонка :", ControlZaslonka, СontrolOpenZaslonka);

    let ControlFilter, СontrolOpenFilter; // Данные фильтров

    // получить данные из формы инпут для фильтров

    ControlFilter = document.querySelector('#input1').value + " шт";

    if (document.getElementById('r5').checked) {
      СontrolOpenFilter = document.getElementById('r5').value;
    }

    if (document.getElementById('r6').checked) {
      СontrolOpenFilter = document.getElementById('r6').value;
    }

    console.log("Фильтра :", ControlFilter, СontrolOpenFilter);

    let TypeHeater; // данные Нагревателя

    if (document.getElementById('r7').checked) {
      TypeHeater = document.getElementById('r7').value;
    }

    if (document.getElementById('r8').checked) {
      TypeHeater = document.getElementById('r8').value;
    }

    console.log("Нагреватель :", TypeHeater);


    let TypeCooler; // данные Охладителя

    if (document.getElementById('r9').checked) {
      TypeCooler = document.getElementById('r9').value;
    }

    if (document.getElementById('r10').checked) {
      TypeCooler = document.getElementById('r10').value;
    }

    if (document.getElementById('r11').checked) {
      TypeCooler = document.getElementById('r11').value;
    }

    console.log("Охладитель :", TypeCooler);


    let FanPower, ControlPower; // данные вентилятора

    FanPower = document.querySelector('#input2').value + " квт";

    if (document.getElementById('r12').checked) {
      ControlPower = document.getElementById('r12').value;
    }

    if (document.getElementById('r13').checked) {
      ControlPower = document.getElementById('r13').value;
    }

    console.log("Вентилятор :", FanPower, ControlPower);


    let BodyCommon, AdditionalOptions1,  AdditionalOptions2,  AdditionalOptions3; // общие данные

    if (document.getElementById('r14').checked) {
      BodyCommon = document.getElementById('r14').value;
    }

    if (document.getElementById('r15').checked) {
      BodyCommon = document.getElementById('r15').value;
    }

    console.log("Вентилятор :", AdditionalOptions1);

    if (document.getElementById('check1').checked) {
      AdditionalOptions1 = document.getElementById('check1').value;
    }

    if (document.getElementById('check2').checked) {
      AdditionalOptions2 = document.getElementById('check2').value;
    }

    if (document.getElementById('check3').checked) {
      AdditionalOptions3 = document.getElementById('check3').value;
    }

    let ResultCheckBoxOptions = [AdditionalOptions1,AdditionalOptions2,AdditionalOptions3];


    console.log("Общие данные :" , BodyCommon, ResultCheckBoxOptions);
    dataToJson(ControlZaslonka, СontrolOpenZaslonka, ControlFilter, СontrolOpenFilter, TypeHeater, TypeCooler, FanPower, ControlPower, BodyCommon, ResultCheckBoxOptions);
}



const dataToJson = (ControlZaslonka, СontrolOpenZaslonka, ControlFilter, СontrolOpenFilter, TypeHeater, TypeCooler, FanPower, ControlPower, BodyCommon, ResultCheckBoxOptions) => 
{

  let data = {
    Заслонка: {
      Управление: ControlZaslonka,
      Контроль_Открытия: СontrolOpenZaslonka
    },
    Фильтра: {
      УправлениеШт: ControlFilter,
      Контроль_Открытия: СontrolOpenFilter
    },
    Нагреватель: {
      Тип: TypeHeater
    },
    Охладитель: {
      Тип: TypeCooler
    },
    Вентилятор: {
      Мощность: FanPower,
      Управление: ControlPower
    },
    Общие: {
      Корпус: BodyCommon,
      Доп_Опции: ResultCheckBoxOptions
    }
  };

  console.log("DATA JSON", JSON.stringify(data));

  dataSend(data);
}


const dataSend = (data) => {
  url = "http://localhost:5050/api/data";
  fetch(url, {  
    method: 'post',  
    headers: {  
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
    },  
    body: JSON.stringify(data) 
  }) 
  .then(function (data) {  
    alert("Данные успешено отправленны на сервер")
  })  
  .catch(function (error) {  
    console.log('Request failed', error);  
  });
}