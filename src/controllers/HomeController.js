class HomeController {
  index(req, res) {
    res.json({
      DeusÉBom: true,
    });
  }
}

export default new HomeController();
