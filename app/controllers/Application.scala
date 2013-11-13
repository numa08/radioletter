package controllers

import play.api.mvc.{Action, Controller}

object Application extends Controller {
  def index = Action {
    Ok(views.html.index.render("あの時のドキドキを、もう一度"))
  }

  def post = TODO
}
