using NexusLite.Api.Models;
using NexusLite.Api.Data;

namespace NexusLite.Api.Controllers;

public class EmployeeController : BaseController<Employee>
{
    public EmployeeController(AppDbContext context) : base(context)
    {

    }
}