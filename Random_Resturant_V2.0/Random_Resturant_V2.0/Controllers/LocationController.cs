using IPGeolocalization;
using IPGeolocation;
using Microsoft.AspNetCore.Mvc;
using Random_Resturant_V2._0;
using Random_Resturant_V2._0.Models;

namespace Random_Resturant_V2._0.Controllers
{
    [Route("location")]
    [ApiController]
    public class LocationController : Controller
    {
        [HttpGet]
        async public Task<IpGeoLocationAapi> getLocation()
        {
            string clientsIPAddress = "ip?ip=68.226.20.171";
            IpGeoLocationAapi results = await Location_DAL.GetHttpClient(clientsIPAddress);

            return results;
        }


        //[HttpGet]
        //public Location GetLocation()
        //{
        //    Console.WriteLine("Inside Get Location");
        //    HttpClient web = Location_DAL.GetHttpClient2();
        //    Console.WriteLine(web);
        //    var baseURI = web.BaseAddress;
        //    Console.WriteLine(baseURI);
        //    var connection = web.GetAsync(baseURI).Result;
        //    Console.WriteLine(connection);
        //    Location result = connection.Content.ReadAsAsync<Location>().Result;
        //    Console.WriteLine(result.State);
        //    return result;
        //}
    }
}
