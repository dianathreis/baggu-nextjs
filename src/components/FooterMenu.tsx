'use client';

const FooterMenu = () => (
  <footer className="container-fluid py-5">
    <div className="row justify-content-end">
      <div className="col-md-3 mb-4 mb-md-0">
        <h2 className="fs-5 mb-3 fw-light fs-6">Join our newsletter</h2>
        <div className="mb-3">
          <input
            type="email"
            className="form-control border-0 border-bottom rounded-0 fs-6"
            placeholder="Enter email"
          />
        </div>
        <button type="button" className="btn btn-dark rounded-5 px-4">
          SUBMIT
        </button>
      </div>

      <div className="col-md-8 offset-md-1">
        <div className="row justify-content-end gap-4">
          {[
            ['FAQ', 'Shipping', 'Returns', 'Policies'],
            ['Sustainability', 'Wallpapers', 'Stores', 'Accessibility'],
            ['Account', 'Wholesale', 'Custom', 'Instagram'],
          ].map((column) => (
            <div className="col-md-3" key={column.join('-')}>
              <div className="d-flex flex-column gap-2">
                {column.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-dark text-decoration-none fw-light"
                  >
                    {item}
                  </a>
                ))}
                {column.includes('FAQ') && (
                  <>
                    <p className="mb-0 fw-light">Contact:</p>
                    <a
                      href="mailto:info@baggu.com"
                      className="text-dark text-decoration-underline fw-light"
                    >
                      info@baggu.com
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="w-100 mt-5">
      <div className="d-flex justify-content-center">
        <img
          src="https://cdn.sanity.io/images/t9jjg1v5/production/01784231ba10b9a65fd12b444553531a23658279-1366x320.svg"
          alt="baggu logo"
          className="img-fluid logo-img"
        />
      </div>
    </div>
  </footer>
);

export default FooterMenu;
