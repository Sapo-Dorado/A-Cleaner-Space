defmodule TrashWeb.CountController do
  use TrashWeb, :controller

  alias Trash.Counting

  action_fallback TrashWeb.FallbackController

  def index(conn, _params) do
    render(conn, "show.json", count: Counting.get_count())
  end

  def update(conn, _params) do
    render(conn, "show.json", count: Counting.inc_count())
  end
end
