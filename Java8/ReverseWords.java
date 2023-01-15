public class ReverseWords{

 public static String reverseWords(String str){
   String[] arr = str.split(" ");
   StringBuilder reverseArr = new StringBuilder();
   
   for (int i = arr.length; i > 0; i--) {
     reverseArr.append(arr[i -1]).append(" ");
   }
   return reverseArr.toString().trim();
 }
}
