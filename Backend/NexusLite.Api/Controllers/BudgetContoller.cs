using NexusLite.Api.Models;
using NexusLite.Api.Data;

namespace NexusLite.Api.Controllers;

public class BudgetController : BaseController<Budget>
{
    public BudgetController(AppDbContext context) : base(context)
    {

    }
}