//UC 7B - Show the day along with daily wage using Array map helper function
 
let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
   dailyCntr++;
   return dailyCntr+" = "+dailyWage;
}
 
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);
 
//UC 7C - Shows Days when Full time wage of 160 were earned
 
function fulltimeWage(dailyWage)
{
   return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);
 
//UC 7D - Find the first occurence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on Day: "+mapDayWithWageArr.find(findFulltimeWage));
 
 
//UC 7E - Check if Every Element of Full Time Wage is truely holding Full time Wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
 
console.log("UC 7E - Check All Elements have Full Time Wage: "+fullDayWageArr.every(isAllFulltimeWage));
 
//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
   return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));
 
 
//UC 7G - Find the number of Days the employee worked.
function totalDaysWorked(numOfDays, dailyWage)
{
  if(dailyWage>0) return numOfDays+1;
  return numOfDays;
}
 
console.log("UC 7G - Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked));
 
//UC 8 Map Functions
 
console.log("UC8A - Emp Wage Map totalHrs: "+
            Array.from(empDailyWageMap.values()).reduce(totalWages,0));
 
//UC 9 Arrow Function
 
const findTotal=(totalVal, dailyVal)=>{
  return totalVal+dailyVal;
}
 
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
 
console.log("UC 9A - Emp Wage With Arrow.: "+" Total Hours: "+
           totalHours+" Total Wages: "+totalSalary);
   
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
 
empDailyHrsMap.forEach((value,key,map)=>{
   if(value==8) fullWorkingDays.push(key);
   else if(value ==4) partWorkingDays.push(key);
   else nonWorkingDays.push(key);
});
   
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);
 
// UC 10 : Objects
 
console.log("UC 10 Showing Daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr);
 totalWages= empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                .reduce((totalWage,dailyHrsAndWage)=>totalWage+=dailyHrsAndWage.dailyWage,0);
 
totalHours= empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                .reduce((totalWage,dailyHrsAndWage)=>totalHours+=dailyHrsAndWage.dailyHours,0);
 
console.log("UC 11A Total Hours: "+totalHours+" Tottal Wages: "+totalWages);
 
 

