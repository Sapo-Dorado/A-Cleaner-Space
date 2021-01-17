defmodule Trash.Repo.Migrations.CreateCounts do
  use Ecto.Migration

  def change do
    create table(:counts) do
      add :count, :integer

      timestamps()
    end

  end
end
