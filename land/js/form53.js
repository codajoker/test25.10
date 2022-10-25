$(document).ready(function () {
  $(document).on("input", "#phone", function () {
    this.value = this.value.replace(/\D/g, "");
  });

  $(document).on("input", "#phoneConfirm", function () {
    this.value = this.value.replace(/\D/g, "");
  });

  $("#phone, #phoneConfirm").on("keyup", function () {
    var value = $(this).val();
    $(this).val("+" + value.substr(value.lastIndexOf("+") + 1));
  });

  jQuery.validator.addMethod(
    "email",
    function (value, element, param) {
      if (this.optional(element)) {
        return true;
      }

      if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
        return true;
      }

      return false;
    },
    "Некорректный email"
  );

  $(".form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        minlength: 8,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: "Введите мин. 2 символа",
      phone: "Некорректный телефон",
      email: "Некорректный email",
    },
  });

  var questArr = [];

  var affiliateusertoken;
  var affiliateid;
  var ip;
  var country;
  var city;
  var utmmedium;
  var utmcontent;
  var utmcampaign;
  var utmsource;
  var utmterm;
  var linkId;
  var countryCode;
  var firstname;
  var lastname;
  var email;
  var phoneCountry;
  var phoneNumber;
  var phoneOperator;
  var params;

  var res;
  var codePhone;

  var url_;
  var url;

  var email;
  var fullName;
  var _fullName;
  var firstName;
  var lastName;
  var phoneConfirm;

  var Data = new Date();
  var Hour = Data.getHours();
  var Minutes = Data.getMinutes();
  var Seconds = Data.getSeconds();

  function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
  }

  init();

  var respLeadId;
  var respSuccess;

  $("#tab1 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab1 .active-item").text().trim();
      questArr.push(html);
      console.log(questArr);
      console.log(html);

      $("#tab1 .tasks-field-wrap").addClass("disable-div");
    }
  });

  $("#tab2 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab2 .active-item").text().trim();

      questArr.push(html);

      //   console.log(html);
      $("#tab2 .tasks-field-wrap").addClass("disable-div");
    }
  });

  $("#tab3 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab3 .active-item").text().trim();

      questArr.push(html);

      //   console.log(html);
      $("#tab3 .tasks-field-wrap").addClass("disable-div");
    }
  });

  $("#tab4 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab4 .active-item").text().trim();

      questArr.push(html);

      //   console.log(html);
      $("#tab4 .tasks-field-wrap").addClass("disable-div");
    }
  });

  $("#tab5 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab5 .active-item").text().trim();

      questArr.push(html);

      //   console.log(html)
      $("#tab5 .tasks-field-wrap").addClass("disable-div");
    }
  });

  $("#tab6 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab6 .active-item").text().trim();

      questArr.push(html);

      //   console.log(html)
      $("#tab6 .tasks-field-wrap").addClass("disable-div");
    }
  });

  $("#tab7 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab7 .active-item").text().trim();

      questArr.push(html);

      // console.log(html)
      $("#tab7 .tasks-field-wrap").addClass("disable-div");
    }
  });

  $("#tab8 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab8 .active-item").text().trim();

      questArr.push(html);

      $("#tab8 .tasks-field-wrap").addClass("disable-div");
      // console.log(html)
    }
  });

  $("#tab9 .tasks-field-wrap ").click(function (e) {
    {
      var html = $("#tab9 .active-item").text().trim();

      questArr.push(html);

      //   console.log(html);

      console.log(questArr);
      $("#tab9 .tasks-field-wrap").addClass("disable-div");
    }
  });

  $(".form-button").click(function () {
    console.log(questArr);
    console.log((document.getElementById("stage").textContent = questArr));
    console.log(document.getElementById("stage"));

    debugger;

    fullName = urlLit($("#name").val(), 0);
    _fullName = fullName.split(" ");
    firstName = _fullName[0];
    lastName = _fullName[1] || _fullName[0];
    email = $("#email").val();
    console.log(email, fullName);

    var _phoneNumber = $("#phone").val();
    phoneOperator = _phoneNumber[0] + _phoneNumber[1];
    phoneNumber = _phoneNumber.replace(phoneOperator, "");

    _phoneNumber = _phoneNumber.replace("+", "");
    _phoneNumber = _phoneNumber.replace(phoneCountry, "");

    console.log(_phoneNumber);

    if (phoneCountry === "380") {
      console.log("phoneCountry", "UA");

      while (_phoneNumber.charAt(0) === "0") {
        _phoneNumber = _phoneNumber.substr(1);
      }
      console.log(_phoneNumber);
    }

    var phoneSms = phoneCountry + _phoneNumber;
    console.log(_phoneNumber);

    res = randomInteger(1000, 9999);
    console.log(res);

    $("#currPhone").text(phoneSms);

    var curDate =
      dateToYMD(new Date()) + " " + Hour + ":" + Minutes + ":" + Seconds;

    utmmedium = $.urlParam("utm_medium");
    utmcontent = $.urlParam("utm_content");
    utmterm = $.urlParam("utm_term");

    if ($(".form ").valid()) {
      dataLayer.push({ event: "formsend" });

      console.log(_phoneNumber);

      $("#preloader").show();
      var sendAdditionalDatal;
      if (country == "Azerbaijan" || phoneCountry == "994") {
        sendAdditionalDatal = {
          url: "https://investor-test.top/",
          email: email,
          fname: firstName,
          lname: lastName,
          prefix: phoneCountry,
          phone: _phoneNumber,
          country: country,
          referral: "fillaz",
          bCode: "9846",
          cid: "1",
          utmSource: utmsource,
          brandName: "FICRM",
          token: "CkYP9vgYcXrvZqaB-ovIt_xUQYXT1LSri9ud-MMwGSZ",
        };
      } else {
        sendAdditionalDatal = {
          url: "https://investor-test.top/?bcode=9846",
          email: email,
          fname: firstName,
          lname: lastName,
          prefix: phoneCountry,
          phone: _phoneNumber,
          country: country,
          referral: "fillru",
          cid: "1",
          utmSource: utmsource,
          brandName: "FICRM",
          token: "CkYP9vgYcXrvZqaB-ovIt_xUQYXT1LSri9ud-MMwGSZ",
        };
      }
      $("#preloader").show();

      var req = $.ajax({
        url: "https://public.crtmadness.net/api/public/crmIntegration",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(sendAdditionalDatal),

        success: function (data, responseText) {
          dataLayer.push({ event: "formsend" });
          window.location = "success.html ";

          console.log("data", data);
          console.log("request api success");

          if (data.Lead_id) {
            respLeadId = "Lead_Id" + ":" + data.Lead_id.toString();
          } else {
            respLeadId == null;
          }
          respSuccess = "Success" + ":" + data.Success.toString();

          console.log(respLeadId);
          console.log(respSuccess);

          var curDate =
            dateToYMD(new Date()) + " " + Hour + ":" + Minutes + ":" + Seconds;

          if (data.Success) {
            $.ajax({
              url: "sheets.php",
              type: "POST",
              data: jQuery.param({
                field0: respLeadId,
                // field1 : email,
                field2: $.trim(questArr[0]),
                field3: $.trim(questArr[1]),
                field4: $.trim(questArr[2]),
                field5: $.trim(questArr[3]),
                field6: $.trim(questArr[4]),
                field7: $.trim(questArr[5]),
                field8: $.trim(questArr[6]),
                field9: $.trim(questArr[7]),
                field10: $.trim(questArr[8]),
              }),
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              success: function (response) {
                console.log("success");
              },
              error: function () {
                console.log("error");
              },
            });

            console.log("data true");
          } else {
            $("#preloader").hide();

            $(".popup-ver").fadeIn("slow");

            if (data.Lead_id) {
              respLeadId = "Lead_Id" + ":" + data.Lead_id.toString();
            } else {
              respLeadId == null;
            }
            respSuccess = "Success" + ":" + data.Success.toString();

            console.log(respLeadId);
            console.log(respSuccess);

            var curDate =
              dateToYMD(new Date()) +
              " " +
              Hour +
              ":" +
              Minutes +
              ":" +
              Seconds;
          }
        },
        error: function () {
          console.log("Error request");
        },
      });
    }
  });

  $("#res").click(function () {
    debugger;

    console.log("phoneCountry-res:", phoneCountry);
    console.log("countryCode-res:", countryCode);

    var codeSms = $("#sms-code").val();

    $("#preloader").show();

    _phoneNumber = $("#currPhone").text().replace(phoneCountry, "");
    _phoneNumber = _phoneNumber.replace("+", "");

    _phoneNumber = _phoneNumber.replace(phoneCountry, "");

    var sendAdditionalDatal;
    if (country == "Azerbaijan" || phoneCountry == "994") {
      sendAdditionalDatal = {
        url: "https://investor-test.top/",
        email: email,
        fname: firstName,
        lname: lastName,
        prefix: phoneCountry,
        phone: _phoneNumber,
        country: country,
        referral: "fillaz",
        bCode: "9846",
        cid: "1",
        utmSource: utmsource,
        brandName: "FICRM",
        token: "CkYP9vgYcXrvZqaB-ovIt_xUQYXT1LSri9ud-MMwGSZ",
      };
    } else {
      sendAdditionalDatal = {
        url: "https://investor-test.top/?bcode=9846",
        email: email,
        fname: firstName,
        lname: lastName,
        prefix: phoneCountry,
        phone: _phoneNumber,
        country: country,
        referral: "fillru",
        cid: "1",
        utmSource: utmsource,
        brandName: "FICRM",
        token: "CkYP9vgYcXrvZqaB-ovIt_xUQYXT1LSri9ud-MMwGSZ",
      };
    }
    var req = $.ajax({
      url: "https://public.crtmadness.net/api/public/crmIntegration",

      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(sendAdditionalDatal),

      withCredentials: true,
      success: function (data) {
        dataLayer.push({ event: "formsend" });
        window.location = "success.html ";

        if (data.Lead_id) {
          respLeadId = "Lead_Id" + ":" + data.Lead_id.toString();
        } else {
          respLeadId == null;
        }
        respSuccess = "Success" + ":" + data.Success.toString();

        console.log(respLeadId);
        console.log(respSuccess);

        var curDate =
          dateToYMD(new Date()) + " " + Hour + ":" + Minutes + ":" + Seconds;

        if (data.Success && codeSms == res) {
          dataLayer.push({ event: "formsend" });

          $.ajax({
            url: "sheets.php",
            type: "POST",
            data: jQuery.param({
              field0: respLeadId,
              field2: $.trim(questArr[0]),
              field3: $.trim(questArr[1]),
              field4: $.trim(questArr[2]),
              field5: $.trim(questArr[3]),
              field6: $.trim(questArr[4]),
              field7: $.trim(questArr[5]),
              field8: $.trim(questArr[6]),
              field9: $.trim(questArr[7]),
              field10: $.trim(questArr[8]),
              field11: $.trim(questArr[9]),
            }),
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success: function (response) {
              console.log("success");
            },
            error: function () {
              console.log("error");
            },
          });
        } else if (!data.Success && codeSms == res) {
          console.log(data.Message.toString());
        }
      },

      error: function () {
        console.log("error");
      },
    });

    if (codeSms != res) {
      console.log("fail");
      $("#codeError").css("display", "block");
      $("#preloader").hide();
    }
  });

  $("#change-number").click(function () {
    $(".popup-form-title, #sms-code, #codeError, #res, #change-number").css(
      "display",
      "none"
    );
    $(".phoneConfirmWrap").css("display", "block");
  });

  $("#submit-number").click(function () {
    debugger;

    phoneConfirm = $(".phoneConfirm").val();

    var _phoneNumber = phoneConfirm;
    if (_phoneNumber) {
      phoneOperator = _phoneNumber[0] + _phoneNumber[1];
      phoneNumber = _phoneNumber.replace(phoneOperator, "");
    }

    console.log(_phoneNumber);

    res = randomInteger(1000, 9999);

    var phoneSms = phoneConfirm;
    phoneSms = phoneSms.replace("+", "");
    var curDate =
      dateToYMD(new Date()) + " " + Hour + ":" + Minutes + ":" + Seconds;

    $.ajax({
      url: "send.php",
      type: "POST",
      data: jQuery.param({ field0: phoneSms, field1: res }),
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: function (response) {
        console.log(response.status);
      },
      error: function () {
        console.log("error");
      },
    });

    $("#currPhone").text(phoneSms);
    $(".popup-form-title, #sms-code, #res, #change-number").css(
      "display",
      "block"
    );
    $(".phoneConfirmWrap").css("display", "none");
    console.log("success");
    console.log(phoneSms);
    console.log(res);
    console.log(phoneCountry);
  });

  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  function getQueryString(baseurl, params) {
    var url = baseurl;
    var isFirst = true;

    $.each(params, function (key, value) {
      url += isFirst ? "?" : "&";

      isFirst = false;
      url += key.toString() + "=" + value;
    });

    return url;
  }

  function getphoneOperator(phoneNumber) {
    var parts = phoneNumber.split(" ", 2);
    if (parts && parts.length > 1) {
      return parts[0].replace("(", "").replace(")", "");
    }
    return "";
  }

  function getphoneNumber(phoneNumber) {
    var parts = phoneNumber.split(" ", 2);

    if (parts && parts.length > 1) {
      return parts[1].replace("-", "").replace("-", "");
    }

    return "";
  }

  function urlLit(w, v) {
    var tr =
      'a b v g d e ["zh","j"] z i y k l m n o p r s t u f h c ch sh ["shh","shch"] ~ y ~ e yu ya ~ ["jo","e"]'.split(
        " "
      );
    var ww = "";
    w = w.toLowerCase();
    for (i = 0; i < w.length; ++i) {
      cc = w.charCodeAt(i);
      ch = cc >= 1072 ? tr[cc - 1072] : w[i];
      if (ch.length < 3) ww += ch;
      else ww += eval(ch)[v];
    }
    return ww
      .replace(/[^a-zA-Z0-9\-]/g, "-")
      .replace(/[-]{2,}/gim, "-")
      .replace(/^\-+/g, "")
      .replace(/\-+$/g, "");
  }

  var ip;

  function init() {
    $.urlParam = function (name) {
      var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
        window.location.href
      );

      if (results) {
        return results[1] || 0;
      }
    };

    affiliateusertoken = $.urlParam("usertoken");
    affiliateid = $.urlParam("affiliateId");
    utmmedium = $.urlParam("utm_medium");
    utmcontent = $.urlParam("utm_content");
    utmterm = $.urlParam("utm_term");
    utmcampaign = $.urlParam("utm_campaign");
    utmsource = $.urlParam("utm_source");

    var input = document.querySelector("#phone");
    var input2 = document.querySelector("#phoneConfirm");

    iti = intlTelInput(input, {
      defaultCountry: "auto",
      separateDialCode: false,
      nationalMode: false,
      initialCountry: "auto",

      preferredCountries: ["ua", "ru", "kz", "az"],
      geoIpLookup: function (callback) {
        $.get(
          "https://pro.ip-api.com/json/?key=U1XmvRzic1gUxH3",
          function () {},
          "jsonp"
        ).always(function (response) {
          var countryCode =
            response && response.countryCode ? response.countryCode : "";
          callback(countryCode);

          console.log(countryCode);

          country = response.country;
          countryCode = response.countryCode;
          city = response.city;

          ip = response.query;

          number = iti.getNumber();

          console.log("country:", country);
          console.log("countryCode:", countryCode);
          console.log("city:", city);
          console.log("ip:", ip);

          iti2 = intlTelInput(input2, {
            defaultCountry: "auto",
            separateDialCode: false,
            nationalMode: false,
            initialCountry: "auto",

            preferredCountries: ["ua", "ru", "kz", "az"],
            geoIpLookup: function (callback) {
              callback(countryCode);
            },
          });

          iti.setCountry(countryCode);

          var dialCode = iti.getSelectedCountryData();

          phoneCountry = dialCode.dialCode;

          console.log(phoneCountry);

          var countryData = iti.getSelectedCountryData();

          input.addEventListener("countrychange", function () {
            var countryData = iti.getSelectedCountryData();

            countryCode = countryData.iso2.toUpperCase();
            country = countryData.name.split(" (")[0];
            console.log("countrychange:", countryCode, country);

            iti2.setCountry(countryCode);
            console.log("phoneCountry(init): " + phoneCountry);
          });

          input2.addEventListener("countrychange", function () {
            var countryData2 = iti2.getSelectedCountryData();

            countryCode = countryData2.iso2.toUpperCase();
            country = countryData2.name.split(" (")[0];
            console.log("countrychange:", countryCode, country, phoneCountry);

            iti.setCountry(countryCode);

            var dialCode = iti.getSelectedCountryData();

            phoneCountry = dialCode.dialCode;

            console.log(dialCode.dialCode);
            console.log("phoneCountry(change): " + phoneCountry);
          });
        });
      },
    });
  }
});
