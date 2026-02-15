using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using NexusLite.Api.Models;
using NexusLite.Api.Data;

namespace NexusLite.Api.Controllers;

public class FinanceController : BaseController<Finance>
{
    public FinanceController(AppDbContext context) : base(context){ }

    [HttpGet("summary")]
    public async Task<ActionResult> GetSummary()
    {
        var transactions = await _context.Finances.ToListAsync();

        var totalIn = transactions.Where(f => f.IsIncome).Sum(f => f.Value);
        var totalOut = transactions.Where(f => !f.IsIncome).Sum(f => f.Value);

        return Ok(new
        {
            TotalIncome = totalIn,
            TotalExpense = totalOut,
            Balance = totalIn - totalOut
        });
    }
}