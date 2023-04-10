using Yelp.Api.Models;
using System.Formats.Asn1;
using System.Globalization;
namespace Random_Resturant_V2._0.Models
{
   
        public class Yelp_DAL
        {

            public static HttpClient _web = null;


            public static HttpClient GetHttpClient()
            {
                var accesstoken = "PIUZTblrnJ0TCwXLfSbXOzhHHC2_3td-i0hfiCKFsV8JMrd6WRjfWHvbAdPV_DJCi-6bxK2_h4bGu7M06WGikMVr8e_q_HMKUaD6Xf-cLazQLsztWeQeCM4uz3NNY3Yx";


                if (_web == null)
                {
                    _web = new HttpClient();
                    _web.BaseAddress = new Uri("https://api.yelp.com/v3/");

                    _web.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue($"Bearer", $"{accesstoken}");
                }
                return _web;
            }

         
        //    async public static Task<YELP> Resturants()
        //    {

        //        HttpClient web = GetHttpClient();

        //        var connection = await web.GetAsync("businesses/search?location=az");
        //    //Console.WriteLine("Before results");
        //        YELP result = await connection.Content.ReadAsAsync<YELP>();
        //    //Console.WriteLine("got past results");
        //    //Console.WriteLine("//" + result + "//");
        //    YELP randomY = new YELP();

        //    //foreach (Business b in result.Businesses)
        //    //{
        //    //    Console.WriteLine(b.Name);
                
        //    //}
        //    //Console.WriteLine("Got Past foreach statement");

        //    // results hold a class CALL YELP. That object holds a LIST of Buisnness objects
        //    Console.WriteLine(result.Businesses[0].Location.Address1);
        //    // Results == YELP which has a list of object BUISNESS[].
        //    return result;

        //}
    }
    }

