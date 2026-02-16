using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NexusLite.Api.Migrations
{
    /// <inheritdoc />
    public partial class AtualizarTabelas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Spent",
                table: "Finances",
                newName: "Value");

            migrationBuilder.RenameColumn(
                name: "Income",
                table: "Finances",
                newName: "Description");

            migrationBuilder.AddColumn<bool>(
                name: "IsIncome",
                table: "Finances",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsIncome",
                table: "Finances");

            migrationBuilder.RenameColumn(
                name: "Value",
                table: "Finances",
                newName: "Spent");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Finances",
                newName: "Income");
        }
    }
}
