$(document).foundation();


var kz = ["A", "AA", "AB", "ABG", "AC", "AE", "AIC", "AK", "AM", "AN", "ANA", "ANG", "ANK", "AÖ", "AP", "APD", "ARN", "ART", "AS", "ASL", "ASZ", "AT", "AU", "AUR", "AW", "AZ", "AZE", "B", "BA", "BAD", "BAR", "BB", "BBG", "BBL", "BC", "BD", "BED", "BEL", "BER", "BGL", "BI", "BIR", "BIT", "BIW", "BL", "BLK", "BM", "BN", "BNA", "BO", "BÖ", "BOR", "BOT", "BP", "BRA", "BRB", "BRG", "BS", "BSK", "BT", "BTF", "BÜS", "BÜZ", "BW", "BWL", "BYL", "BZ", "C", "CA", "CB", "CE", "CHA", "CLP", "CO", "COC", "COE", "CUX", "CW", "D", "DA", "DAH", "DAN", "DAU", "DB", "DBR", "DD", "DE", "DEG", "DEL", "DGF", "DH", "DL", "DLG", "DM", "DN", "DO", "DON", "DS", "DU", "DÜW", "DW", "DZ", "E", "EA", "EB", "EBE", "ED", "EE", "EF", "EH", "EI", "EIC", "EIL", "EIS", "EL", "EM", "EMD", "EMS", "EN", "ER", "ERB", "ERH", "ES", "ESA", "ESW", "EU", "EW", "F", "FB", "FD", "FDS", "FF", "FFB", "FG", "FI", "FL", "FLÖ", "FN", "FO", "FOR", "FR", "FRG", "FRI", "FRW", "FS", "FT", "FTL", "FÜ", "FW", "G", "GA", "GAP", "GC", "GDB", "GE", "GER", "GF", "GG", "GHA", "GHC", "GI", "GL", "GM", "GMN", "GNT", "GÖ", "GP", "GR", "GRH", "GRM", "GRS", "GRZ", "GS", "GT", "GTH", "GÜ", "GUB", "GVM", "GW", "GZ", "H", "HA", "HAL", "HAM", "HAS", "HB", "HBN", "HBS", "HC", "HD", "HDH", "HDL", "HE", "HEF", "HEI", "HEL", "HER", "HET", "HF", "HG", "HGN", "HGW", "HH", "HHM", "HI", "HIG", "HL", "HM", "HN", "HO", "HOL", "HOM", "HOT", "HP", "HR", "HRO", "HS", "HSK", "HST", "HU", "HV", "HVL", "HWI", "HX", "HY", "HZ", "IGB", "IK", "IL", "IN", "IZ", "J", "JB", "JE", "JL", "K", "KA", "KB", "KC", "KE", "KEH", "KF", "KG", "KH", "KI", "KIB", "KL", "KLE", "KLZ", "KM", "KN", "KO", "KÖT", "KR", "KS", "KT", "KU", "KÜN", "KUS", "KW", "KY", "KYF", "L", "LA", "LAU", "LB", "LBS", "LBZ", "LC", "LD", "LDK", "LDS", "LER", "LEV", "LG", "LI", "LIB", "LIF", "LIP", "LL", "LM", "LN", "LÖ", "LÖB", "LOS", "LSA", "LSN", "LSZ", "LU", "LUK", "LWL", "M", "MA", "MAB", "MB", "MC", "MD", "ME", "MEI", "MEK", "MER", "MG", "MGN", "MH", "MHL", "MI", "MIL", "MK", "MKK", "ML", "MM", "MN", "MOL", "MOS", "MQ", "MR", "MS", "MSP", "MST", "MTK", "MÜ", "MÜR", "MVL", "MW", "MYK", "MZ", "MZG", "N", "NAU", "NB", "ND", "NDH", "NE", "NEA", "NEB", "NES", "NEW", "NF", "NH", "NI", "NK", "NL", "NM", "NMB", "NMS", "NOH", "NOL", "NOM", "NP", "NR", "NRW", "NU", "NVP", "NW", "NWM", "NY", "NZ", "OA", "OAL", "OB", "OBG", "OC", "OD", "OE", "OF", "OG", "OH", "OHA", "OHV", "OHZ", "OK", "OL", "OPR", "OR", "OS", "OSL", "OVL", "OVP", "OZ", "P", "PA", "PAF", "PAN", "PB", "PCH", "PE", "PER", "PF", "PI", "PIR", "PK", "PL", "PLÖ", "PM", "PN", "PR", "PS", "PW", "PZ", "QFT", "QLB", "R", "RA", "RC", "RD", "RDG", "RE", "REG", "RG", "RH", "RIE", "RL", "RM", "RN", "RO", "ROS", "ROW", "RP", "RPL", "RS", "RSL", "RT", "RU", "RÜD", "RÜG", "RV", "RW", "RZ", "S", "SAD", "SAL", "SAW", "SB", "SBG", "SBK", "SC", "SCZ", "SDH", "SDL", "SDT", "SE", "SEB", "SEE", "SFA", "SFB", "SFT", "SG", "SGH", "SH", "SHA", "SHG", "SHK", "SHL", "SI", "SIG", "SIM", "SK", "SL", "SLF", "SLN", "SLS", "SLZ", "SM", "SN", "SO", "SOK", "SÖM", "SON", "SP", "SPB", "SPN", "SR", "SRB", "SRO", "ST", "STA", "STB", "STD", "STL", "SU", "SÜW", "SW", "SZ", "SZB", "TBB", "TET", "TF", "TG", "THL", "THW", "TIR", "TO", "TÖL", "TP", "TR", "TS", "TÜ", "TUT", "UE", "UEM", "UER", "UH", "UL", "UM", "UN", "V", "VB", "VEC", "VER", "VIE", "VK", "VS", "W", "WAF", "WAK", "WB", "WBS", "WDA", "WE", "WEN", "WES", "WF", "WHV", "WI", "WIL", "WIS", "WK", "WL", "WLG", "WM", "WMS", "WN", "WND", "WO", "WOB", "WR", "WRN", "WSF", "WST", "WSW", "WT", "WTM", "WÜ", "WUG", "WUN", "WUR", "WW", "WZL", "X", "Y", "Z", "ZE", "ZI", "ZP", "ZR", "ZS", "ZW", "ZZ"];

var input = ''; // Input
var input_arr; // Input Array
var input_lenght; // Input Length
var input_arr_pos = 0; // Aktuelle Position im Array
var p;
var finish = '';

$('#button').click(function() {

    input = ''; // Input
    input_arr; // Input Array
    input_lenght; // Input Length
    input_arr_pos = 0; // Aktuelle Position im Array
    p;
    finish = '';

    var input = $('#input').val().toUpperCase(); // Input to var and Uppercase

    input_arr = input.split(''); // Input to Array
    input_lenght = input_arr.length; // Input length

    check(input_arr);

});

function check(input_arr) {

    var pruef = '';


    var pruef_size = 3; // Anfangslänge der Zennzeichenprüfung

    do {
        pruef = pruefCreat(input_arr, pruef_size, input_arr_pos);
        for (var i = 0; i < kz.length; i++) {
            if (kz[i].length == pruef_size) {
                if (kz[i] == pruef) {
                    pruef_flag = true;
                    input_arr_pos += pruef_size;
                    if (input_arr_pos > input_lenght) {
                        console.log('nicht möglich');
                    }
                    createZennzeichen(pruef);
                }
            }

        }
        pruef_size--;
    } while (pruef_size >= 0);
};

function pruefCreat(input_arr, p, k) {

    var pruef = ''; // Setzt Input-arr zusammen 

    for (i = 0; i < p; i++) {
        pruef = pruef + input_arr[i + k];
    }
    return pruef;
};

function createZennzeichen(pruef) {

    var middle = creatMiddle(input_arr, input_arr_pos);

    var end = createEnd();


    input_arr_pos += 2;
    if (input_arr_pos > input_lenght) {
        finish = finish + "<div class='license_plate red'>" + "<div class='country'><i class='fa fa-car' aria-hidden='true' /><div class='country_code'>DE</div></div>" + "<div class='left'>" + 'XX' + "</div><div class='middle'>" + 'XX' + "</div><div class='right'> " + end + "</div></div>";
        $('#output').html(finish);
        check(input_arr);
    } else {
        finish = finish + "<div class='license_plate'>" + "<div class='country'><i class='fa fa-car' aria-hidden='true' /><div class='country_code'>DE</div></div>" + "<div class='left'>" + pruef + "</div><div class='middle'>" + middle + "</div><div class='right'> " + end + "</div></div>";
        $('#output').html(finish);
        check(input_arr);
    }


};

function creatMiddle(input_arr, input_arr_pos) {
    var middle = '';
    for (i = 0; i < 2; i++) {

        middle = middle + input_arr[input_arr_pos + i];
    }
    return middle;
}

function createEnd() {
    var end = Math.floor(Math.random() * (999 + 1))
    return end;
}