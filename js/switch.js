function bill() {
     price_f = document.getElementById("price_main").value;
     gst_f = document.getElementById("gst_main").value;

    price_f = +price_f;
    gst_f = +gst_f;

 p_price = document.getElementById("price");
 p_gst = document.getElementById("gst");
 p_gst_amount = document.getElementById("gst_amount");
 p_final_total = document.getElementById("final_total");

    switch (gst_f) {
        case 18:
            p_price.innerHTML = price_f;
            p_gst.innerHTML = gst_f;
            gst_amount = price_f*gst_f/100;
            p_gst_amount.innerHTML = gst_amount;
            p_final_total.innerHTML = gst_amount+price_f;
            break;
        case 7 :
            p_price.innerHTML = price_f;
            p_gst.innerHTML = gst_f;
            gst_amount = price_f*gst_f/100;
            p_gst_amount.innerHTML = gst_amount;
            p_final_total.innerHTML = gst_amount+price_f;
            break;
         case 5 :
            p_price.innerHTML = price_f;
            p_gst.innerHTML = gst_f;
            gst_amount = price_f*gst_f/100;
            p_gst_amount.innerHTML = gst_amount;
            p_final_total.innerHTML = gst_amount+price_f;
            break;
         case 15 :
            p_price.innerHTML = price_f;
            p_gst.innerHTML = gst_f;
            gst_amount = price_f*gst_f/100;
            p_gst_amount.innerHTML = gst_amount;
            p_final_total.innerHTML = gst_amount+price_f;
            break;      

           
        default: alert("select valid gst")

    }

}

