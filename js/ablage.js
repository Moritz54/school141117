    for (; pruef_flag == false && p > 0;) {
        pruef = '';
        for (i = 0; i < p; i++) {
            pruef = pruef + input_arr[i];
        }
        for (var i = 0; i < kz.length; i++) {
            // console.log(kz[i].length);

            for (; kz_length > 1;) {
                console.log('+');
                console.log(pruef + '  ' + kz_length);
                if (pruef == kz_length) {
                    if (pruef == kz[i]) {
                        console.log(pruef + ' ' + kz[i] + " Jaa");
                        pruef_flag = true;
                        break;
                    } else {
                        // console.log(pruef + ' ' + kz[i] + " Nein")
                    }
                } else {
                    kz_length--;
                }
            }
        }
        p--;
    }