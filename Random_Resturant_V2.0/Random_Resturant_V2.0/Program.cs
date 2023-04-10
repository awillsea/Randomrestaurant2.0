using Microsoft.AspNetCore.Mvc;
using Random_Resturant_V2._0.Models;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "LocalOriginsPolicy",
        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
    );
}
);

var app = builder.Build();

app.UseCors("LocalOriginsPolicy");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

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
