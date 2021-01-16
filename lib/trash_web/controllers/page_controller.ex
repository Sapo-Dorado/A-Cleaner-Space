defmodule TrashWeb.PageController do
  use TrashWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
