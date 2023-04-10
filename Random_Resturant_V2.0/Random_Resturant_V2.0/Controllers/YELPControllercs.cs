using Microsoft.AspNetCore.Mvc;
using Random_Resturant_V2._0.Models;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

namespace Random_Resturant_V2._0.Controllers
{
    [Route("yelp")]
    [ApiController]
    public class YELPControllercs : ControllerBase
    {
        [HttpGet]
        public YELP GetByCity()
        {
            HttpClient web = Yelp_DAL.GetHttpClient();

            var connection = web.GetAsync("businesses/search?location=az").Result;
            YELP result = connection.Content.ReadAsAsync<YELP>().Result;
            YELP randomY = new YELP();



            // results hold a class CALL YELP. That object holds a LIST of Buisnness objects
            Console.WriteLine(result.Businesses[0].Location.Address1);
            // Results == YELP which has a list of object BUISNESS[].
            return result;
            //return new YELP();
        }
        [HttpGet("{endPoint}")]
        public YELP GetByFoodType( string endPoint )
        {
            HttpClient web = Yelp_DAL.GetHttpClient();

            var connection = web.GetAsync($"businesses/search?{endPoint}").Result;
            YELP result = connection.Content.ReadAsAsync<YELP>().Result;
            YELP randomY = new YELP();



            // results hold a class CALL YELP. That object holds a LIST of Buisnness objects
            Console.WriteLine(result.Businesses[0].Location.Address1);
            // Results == YELP which has a list of object BUISNESS[].
            return result;

        }
       

    }
}
