using System.ComponentModel;
using System.Reflection.PortableExecutable;
using Yelp.Api.Models;
using IPGeolocalization;

namespace Random_Resturant_V2._0.Models
{
    public class Location_DAL
    {
        public static HttpClient _web = null;

         async public static Task<IpGeoLocationAapi> GetHttpClient(string clientsIPAddress)
        {
          

            IpGeoLocationAapi clientLocation = new IpGeoLocationAapi();
                var client = new HttpClient();
            var request = new HttpRequestMessage(HttpMethod.Get, $"https://ip-geolocalization-api.p.rapidapi.com/{clientsIPAddress}");
            request.Headers.Add("X-RapidAPI-Key", "6fe49d7420msha73354895fc89c6p18786cjsnb0daecf3b220");
            request.Headers.Add("Cookie", "XSRF-TOKEN=eyJpdiI6Ikt6K3VHODlWN1kyWC9NVmUwUyswMGc9PSIsInZhbHVlIjoiN0pjRlhUdEU3dzRKeUxFeTRHK05UUHNwanZMNFhxT3RnM0hyRHc1QWtxN1JhTU0waFZlcWkvNU5ZUkR1eGVKQXJzRzF2eWdkRVJQWlMrNzFvRVpqSldIa1ZVSEZZNlpUZmtxcW90dHJ0UnpqQndaZ0pEcW1tYTlvR1Rmdzc5cXAiLCJtYWMiOiJmNTQxNjQ4NDBlMzViNDcwNTNlNmUzYzhkZThlMzJhMDEyNzBmYTE3MjY0NWU2OTllYmY5NDRmM2ZjZWI2Mzg1IiwidGFnIjoiIn0%3D; ipxapi_session=eyJpdiI6IkhvYmtZRjFJMkUrSVhhbXE2NU8xelE9PSIsInZhbHVlIjoiOTMvS2pVUWlZUzNOQllYT0QwSW5LRTZXclg0bUpUQ2EyRGhPS1ppNWphMUtVbythVkk1Y2NvM0tETkloeklrVkhVd1o2M3o2cEZTMmc3T29hQzExRGFFeTRnaWMyYVdtOVJlRmdRVHg4c2t5N1V3YTRjSFFWck9FUnNOZ2Y3TngiLCJtYWMiOiIxNTE1ZmYzOTJmZWU4MzkwYjViZDIwYjg5OTBhODg5MGI2NWZhMGY5NDBmZGNhMmRiOTk5ZGFjZDA2MGE2YWFmIiwidGFnIjoiIn0%3D");
            //Console.WriteLine(request);
            var response = await client.SendAsync(request);
            
                response.EnsureSuccessStatusCode();
            Console.WriteLine(await response.Content.ReadAsStringAsync()); ;
            var test =  response.Content.ReadAsAsync<IpGeoLocationAapi>().Result;
            Console.WriteLine(test.Region);
            clientLocation = test;
           
            //var body = await response.Content.ReadAsAsync<Location>();
            //Location userLocation = body;
            //clientLocation = userLocation;
            ////Console.WriteLine(body + "//////" + userLocation.City);
            //Console.WriteLine(body.State);
            //Console.WriteLine(body.ZipCode);
            //Console.WriteLine(clientLocation);

            //foreach(PropertyDescriptor d in TypeDescriptor.GetProperties(typeof(Location)))
            //{
            //    Console.WriteLine(d.Name);
            //    Console.WriteLine(d.Category);
            //}


            return clientLocation;
                
        }



    }


    }

