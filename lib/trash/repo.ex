defmodule Trash.Repo do
  use Ecto.Repo,
    otp_app: :trash,
    adapter: Ecto.Adapters.Postgres
end
