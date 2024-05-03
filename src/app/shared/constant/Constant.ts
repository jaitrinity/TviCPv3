export class Constant{    
    
    // public static serverURL = "http://localhost:8080/TVI_CP/tvi/";
    public static serverURL = "/TVI_CP/tvi/"; // prod URL
    // public static serverURL = "http://www.in3.co.in:8080/TVI_CP/tvi/"; // prod URL
    public static phpServerURL = "http://www.in3.co.in/in3.co.in/TVI_CP/php/"; // prod URL

    // public static serverURL = "http://localhost:8080/TVI_CP_WS_test/tvi/";
    // public static serverURL = "/TVI_CP_WS_test/tvi/";
    // public static serverURL = "http://www.in3.co.in:8080/TVI_CP_WS_test/tvi/";
    // public static phpServerURL = "http://www.in3.co.in/in3.co.in/TVI_CP/php/test/";
   
    public static SUCCESSFUL_RESPONSE = "100000";
    public static SUCCESSFUL_STATUS_CODE = "100000";
    public static GENERIC_DATABASE_ERROR = "-102003";
    public static NO_RECORDS_FOUND_CODE = "102001";
    public static ALREADY_EXIST_CODE = "403";
    public static NO_RECORD_FOUND = "No Record Found";
    public static TVI_CP_PRIVATE_KEY = "TVICPPRIVATEKEY";
    public static GOOGLE_MAP_API_KEY = "AIzaSyDkv0_3UwK1Y_EpQ1LHQr5KA5oVBMc1160";
    public static SERVER_ERROR = "Server Error";
    public static MINUTES_UNTIL_AUTO_LOGOUT = 10; // in mins
    public static CHECK_INTERVAL = 15000; // in ms
    public static STORE_KEY =  'lastAction';
    public static VERSION = 39;

    public static returnServerErrorMessage(serviceName:string):string{
        return "Server error while invoking "+serviceName+ " service";
    }
    
}