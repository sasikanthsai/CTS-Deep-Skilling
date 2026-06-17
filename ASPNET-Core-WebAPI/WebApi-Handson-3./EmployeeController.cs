using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApiHandson.Models;
using WebApiHandson.Filters;

namespace WebApiHandson.Controllers;

[ApiController]
[Route("api/[controller]")]
[AllowAnonymous]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public ActionResult<List<Employee>> GetStandard()
    {
        throw new Exception("Custom Exception Generated");
    }

    [HttpPost]
    public IActionResult Post([FromBody] Employee employee)
    {
        return Ok(employee);
    }

    [HttpPut]
    public IActionResult Put([FromBody] Employee employee)
    {
        return Ok(employee);
    }

    private List<Employee> GetStandardEmployeeList()
    {
        return new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "John",
                Salary = 50000,
                Permanent = true,
                Department = new Department
                {
                    Id = 1,
                    Name = "IT"
                },
                Skills = new List<Skill>
                {
                    new Skill
                    {
                        Id = 1,
                        Name = "C#"
                    },
                    new Skill
                    {
                        Id = 2,
                        Name = "ASP.NET Core"
                    }
                },
                DateOfBirth = new DateTime(1995, 5, 15)
            }
        };
    }
}