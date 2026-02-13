using System.Collections.Generic;

namespace NexusLite.Api.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string ContactNumber { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public List<Budget> Budgets { get; set; } = new List<Budget>();
    }
}