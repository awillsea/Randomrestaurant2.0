using System.Web.Http;
using System.Web.Http.Cors;



var policyName = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
        builder =>
        {
            builder
            .AllowAnyOrigin()
      ;
        });
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
//var config = new HttpConfiguration();
//var cors = new EnableCorsAttribute("http://localhost:4200","*","*");
//config.EnableCors(cors)

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
    app.UseCors(policyName);

}

app.UseHttpsRedirection();

app.UseCors(policyName);

app.UseAuthorization();

app.MapControllers();
//Console.WriteLine("HELLO");
//async static <YELP> GetALL()
//{
//    var results = await Yelp_DAL.Resturants();
//    return results;

//    Console.WriteLine("before" + results + "after");

//}
//Console.WriteLine(Yelp_DAL.Resturants());
app.Run();
