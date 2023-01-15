public class ZywOo {

  public static String warnTheSheep(String[] array) {
   for (int i = array.length -1; i >= 0; i--) {
     int sheepPos = array.length - (i + 1);
     if (array[i] == "wolf") {
       if (i == array.length -1) {
         return "Pls go away and stop eating my sheep";
       }
       return "Oi! Sheep number " + sheepPos + "! You are about to be eaten by a wolf!";
     }
   }
  return "";
  }
}
