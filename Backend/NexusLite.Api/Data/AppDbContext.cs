using Microsoft.EntityFrameworkCore;
using System;
using System.IO;
using System.Collections.Generic;

using NexusLite.Api.Models;

namespace NexusLite.Api.Data;

public class AppDbContext : DbContext
{
	public DbSet<Client> Clients { get; set; }
	public DbSet<Employee> Employees { get; set; }
	public DbSet<Finance> Finances { get; set; }
	public DbSet<Budget> Budgets { get; set; }

    public string DbPath { get; }

    public AppDbContext()
	{
        DbPath = Path.Combine("Data", "nexuslite.db");
    }

	protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite($"Data Source={DbPath}");
}
